export const request = async (url, options) => {
  try {
    const res = await fetch(url, options);
    console.log(res);
    if (res.ok) {
      return res.json();
    }
  } catch (e) {
    console.error(e);
  }
};
