import React from "react";
import { useForm } from "react-hook-form";

const EventModal = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className=" mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Title*</span>
          </label>
          <input
            type="text"
            placeholder="title"
            className="input input-bordered w-full max-w-xs"
            {...register("title", { required: true })}
          />
        </div>
        <div className="w-full flex mt-3 mb-4">
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Start Time*</span>
            </label>
            <select {...register("startTime", { required: true })}>
              <option value="">Select...</option>
              <option value="A">Option A</option>
              <option value="B">Option B</option>
            </select>
          </div>
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">End time*</span>
            </label>
            <select {...register("endTime", { required: true })}>
              <option value="">Select...</option>
              <option value="A">Option A</option>
              <option value="B">Option B</option>
            </select>
          </div>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description*</span>
          </label>

          <textarea
            placeholder="Description"
            className="textarea textarea-bordered textarea-md w-full max-w-xs"
            {...register("description", { required: true })}></textarea>
        </div>
        <div className="flex justify-end mt-3 bg-green-500 px-3 py-2 w-fit">
          <input type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
};

export default EventModal;
