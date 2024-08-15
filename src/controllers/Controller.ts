class Controller {
  constructor() {}

  public create = async (url: string, data: object) => {
    try {
      const response = await fetch(`${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  };

  public getOne = async (url: string, id: number) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  };

  public getAll = async (url: string) => {
    try {
      const response = await fetch(`${url}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  };
}

export default Controller;
