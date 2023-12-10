import axios from "axios";
export const fetchPublicAboutUsHandler = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_COURSE}/school-about-us/school-about-us-show`
  );
  return res;
};

// add AboutUs handler
export const addAdminAboutUsHandler = async (fields) => {
  console.log("fff", fields);
  const res = await fetch(
    `${process.env.REACT_APP_COURSE}/school-about-us/school-about-us-save`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: fields?.id,
        title: fields?.title,
        description: fields?.description,
      }),
    }
  );
  return await res;
};
