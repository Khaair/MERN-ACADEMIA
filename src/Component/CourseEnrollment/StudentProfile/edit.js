import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  class: yup.string().required("Class is required"),
  section: yup.string().required("Section is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  address: yup.string().required("Address is required"),
  dob: yup.string().required("Date of birth is required"),
  gender: yup.string().required("Gender is required"),
});
export function Edit() {
  const [data, setData] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: async (values) => {
      try {
        await schema.validate(values, { abortEarly: false });
        return { values, errors: {} };
      } catch (yupErrors) {
        return {
          values: {},
          errors: yupErrors.inner.reduce((allErrors, err) => {
            return {
              ...allErrors,
              [err.path]: err.message,
            };
          }, {}),
        };
      }
    },
  });

  const onSubmit = (formData) => {
    console.log("Submit data", formData);

    setData(JSON.stringify(formData));
  };

  return (
    <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div class="row">
        <div class="col-lg-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              Name
            </label>
            <input
              {...register("firstName")}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              type="text"
              id="firstName"
              placeholder="First name"
            />
            <p className="text-red-500 text-sm">{errors?.firstName}</p>
          </div>
        </div>
        <div class="col-lg-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="class"
            >
              Class
            </label>
            <select
              {...register("class", { required: true })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              id="class"
            >
              <option value="">Select...</option>
              <option value="A">Option A</option>
              <option value="B">Option B</option>
            </select>
            <p className="text-red-500 text-sm">{errors?.class}</p>
          </div>
        </div>

        <div class="col-lg-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="section"
            >
              Section
            </label>
            <select
              {...register("section", { required: true })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              id="section"
            >
              <option value="">Select...</option>
              <option value="A">Option A</option>
              <option value="B">Option B</option>
            </select>
            <p className="text-red-500 text-sm">{errors?.section}</p>
          </div>
        </div>

        <div class="col-lg-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email")}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
            <p className="text-red-500 text-sm">{errors?.email}</p>
          </div>
        </div>

        <div class="col-lg-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Phone number
            </label>
            <input
              {...register("phoneNumber")}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              type="text"
              id="phoneNumber"
              placeholder="Enter your phone number"
            />
            <p className="text-red-500 text-sm">{errors?.phoneNumber}</p>
          </div>
        </div>

        <div class="col-lg-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              {...register("address")}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              type="text"
              id="address"
              placeholder="Enter your address"
            />
            <p className="text-red-500 text-sm">{errors?.address}</p>
          </div>
        </div>

        <div class="col-lg-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="dob"
            >
              Date of birth
            </label>
            <input
              {...register("dob")}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              type="text"
              id="dob"
              placeholder="Enter your date of birth"
            />
            <p className="text-red-500 text-sm">{errors?.dob}</p>
          </div>
        </div>
        <div class="col-lg-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
              {...register("gender", { required: true })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              id="gender"
            >
              <option value="">Select...</option>
              <option value="A">Option A</option>
              <option value="B">Option B</option>
            </select>
            <p className="text-red-500 text-sm">{errors?.gender}</p>
          </div>
        </div>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
