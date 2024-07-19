
interface FhirConfig {
  baseUrl: string;
  debug?: boolean;
}


interface FhirRequestArgs {
  method: string;
  url: string;
  body?: any;
  headers?: Record<string, string>;
}


export const createFhirClient = (config: FhirConfig) => {
  const { baseUrl, debug } = config;

  const request = async (args: FhirRequestArgs) => {
    const { method, url, body, headers } = args;
    if (debug) {
      console.log('DEBUG: Request:', { method, url, body, headers });
    }

    const response = await fetch(`${baseUrl}${url}`, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers,
    });

    const data = await response.json();
    if (debug) {
      console.log('DEBUG: Response:', data);
    }

    return {
      data,
      status: response.status,
      headers: response.headers,
    };
  };

  return {
    get: (url: string, headers?: Record<string, string>) => request({ method: 'GET', url, headers }),
    post: (url: string, body: any, headers?: Record<string, string>) => request({ method: 'POST', url, body, headers }),
    put: (url: string, body: any, headers?: Record<string, string>) => request({ method: 'PUT', url, body, headers }),
    delete: (url: string, headers?: Record<string, string>) => request({ method: 'DELETE', url, headers }),
    //add FHIR specific methods to this
  };
};
