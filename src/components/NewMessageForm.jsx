import React from 'react';

const NewMessageForm = () => (
  <form className="">
    <div className="p-2 form-row d-flex flex-row justify-content-between">
      <input className="col-8 form-control" type="text" />
      <button className="col-3 btn btn-primary" type="submit">
        Send
      </button>
    </div>
  </form>
);

export default NewMessageForm;
