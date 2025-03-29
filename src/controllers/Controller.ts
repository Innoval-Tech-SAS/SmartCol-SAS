class Controller {
  constructor() {

  }

  private async request(url: string, options?: RequestInit): Promise<any> {
    if (!url) {
      throw new Error("URL is required");
    }
    if (!url.startsWith("/")) {
      throw new Error("URL must start with '/'");
    }
    // if (!options) {
    //   throw new Error("Options are required");
    // }
    // if (!options.method) {
    //   throw new Error("Method is required");
    // }
    // if (!options.headers) {
    //   throw new Error("Headers are required");
    // }
    // if (!options.body) {
    //   throw new Error("Body is required");
    // }

    try {
      const API_URL = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${API_URL}${url}`, options);
      console.log("response", response);
      if (!response.ok) {
        console.log("response", response);
        throw new Error("Network response was not ok");
      }
      const data = await response.json()
      return data;
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  }


  public getWhatsAppNumber = () => {
    return this.request("/whatsapp", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  };

  public create = (url: string, data: object) => {
    return this.request(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  public getOne = (url: string, id: number) => {
    return this.request(`${url}/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  };

  public getAll = (url: string) => {
    return this.request(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  };
}

const controller = new Controller();

export default controller;
