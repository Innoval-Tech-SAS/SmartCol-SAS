class Controller {
  constructor() { }

  private async request(url: string, options: RequestInit): Promise<any> {
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        console.log("response", response);
        throw new Error("Network response was not ok");
      }

      return await response.json();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  }

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
