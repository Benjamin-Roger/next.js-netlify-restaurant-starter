import config from "config";

import { Button } from "@material-ui/core";

const ContactForm = () => (
  <>
    <form action={config.getFormAction} method="POST">
      <div className="sm:w-1/2 sm:inline-block my-2 pr-2">
        <label htmlFor="name">Name</label>
        <br />
        <input
          name="name"
          placeholder="John Smith"
          className="border p-3 rounded w-full"
          required
        />
      </div>

      <div className="sm:w-1/2 sm:inline-block  pl-2">
        <label htmlFor="email">Email</label>
        <br />
        <input
          name="email"
          placeholder="john.smith@gmail.com"
          type="email"
          className="border p-3 rounded w-full"
          required
        />
      </div>

      <div className="my-2">
        <label htmlFor="remark">Remark</label>
        <br />
        <textarea
          name="remark"
          placeholder="I would like to know..."
          className="border p-3 rounded w-full"
        />
      </div>

      <Button
        variant="contained"
        color="primary"
        type="submit"
        className="textWhite"
      >
        Submit
      </Button>
    </form>

    <style jsx>{`
      label {
        font-weight: bold;
      }
    `}</style>
  </>
);

export default ContactForm;
