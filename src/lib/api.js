export const request = async (url, options) => {
  try {
    const res = await fetch(url, options);

    if (res.ok) {
      return res.json();
    } else {
      return { code: res.status };
    }
  } catch (e) {
    console.error(e);
  }
};
