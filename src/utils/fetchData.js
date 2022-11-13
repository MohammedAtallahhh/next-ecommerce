const baseUrl = process.env.NEXT_PUBLIC_URL;

export const getData = async (url, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    mode: "no-cors",
    method: "GET",
    headers: {
      // Authorization: token,
    },
  });

  return await res.json();
};

export const postData = async (url, post, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    mode: "no-cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
    body: JSON.stringify(post),
  });

  return await res.json();
};

export const putData = async (url, post, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    mode: "no-cors",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
    body: JSON.stringify(post),
  });

  return await res.json();
};

export const patchData = async (url, post, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    mode: "no-cors",
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
    body: JSON.stringify(post),
  });

  return await res.json();
};

export const deleteData = async (url, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    mode: "no-cors",
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
  });

  return await res.json();
};
