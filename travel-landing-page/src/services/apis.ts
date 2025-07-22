const headers = {
  "Content-Type": "application/json",
};

const get = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers,
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(`❌ Fetch data failed with ${url} from MockAPI:`, error);
    return [];
  }
};

const post = async <T>(url: string, data: T) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`MockAPI responded with status ${response.status}`);
    }
  } catch (error) {
    console.error("❌ Error forwarding to add MockAPI:", error);
  }
};

const put = async <T>(url: string, data: T) => {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`MockAPI responded with status ${response.status}`);
    }
  } catch (error) {
    console.error("❌ Error forwarding to update MockAPI:", error);
  }
};

const remove = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers,
    });

    if (!response.ok) {
      throw new Error(`MockAPI responded with status ${response.status}`);
    }
  } catch (error) {
    console.error("❌ Error forwarding to delete MockAPI:", error);
  }
};

export default {
  get,
  post,
  put,
  delete: remove,
};
