import * as React from "react";
import { useForm } from "react-hook-form";
import addToMailchimp from "gatsby-plugin-mailchimp";

const SubscribeCard = () => {
  const [mailchimpResult, setMailchimpResult] = React.useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async ({ email }) => {
    const result = await addToMailchimp(email);
    setMailchimpResult(result);
  };

  return (
    <div className="bg-subscribe-card-color p-12 rounded-xl lg:w-9/12 m-auto text-center">
      <h1 className="text-white font-bold text-3xl text-center">
        <span className="text-secondary-default">Subscribe</span> to the GSF
        Newsletter
      </h1>
      {mailchimpResult && mailchimpResult.result === "success" ? (
        <p className="newsletter-success-msg mt-4 text-primary-lighter max-w-sm mx-auto ">
          {mailchimpResult.msg}
        </p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="email"
            className={`opacity-70 rounded-lg p-3 text-white bg-subscribe-input-color flex mx-auto mt-6 lg:w-6/12 mb-2 ${
              errors.email ? "border-2 border-rose-500" : "border-0"
            }`}
            placeholder="example@domain.com"
            {...register("email", {
              required: true,
              pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
            })}
          />
          {errors.email?.type === "required" && (
            <small className="tracking-wide text-sm text-rose-500">
              Email address is required
            </small>
          )}
          {errors.email?.type === "pattern" && (
            <small className="tracking-wide text-sm text-rose-500">
              Email address not valid
            </small>
          )}
          {mailchimpResult?.result === "error" && (
            <small
              className={`error-msg ${errors.msg ? "" : ""}`}
              dangerouslySetInnerHTML={{ __html: mailchimpResult.msg }}
            />
          )}
          <button
            type="submit"
            className="bg-secondary-default text-gray-darkest text-sm font-bold rounded-lg flex mx-auto mt-6 py-3.5 px-8 hover:bg-btn-hover transition-colors"
          >
            Sign up
          </button>
        </form>
      )}
    </div>
  );
};

export default SubscribeCard;
