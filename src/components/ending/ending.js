import React from 'react';

const Ending = () => {
  return (
    <div class="ending">
      <p class="titles">Hi there!</p>
      <p class="contents">
        Want to tell me something interesting? I'd love to hear from you!
      </p>
      <input
        type="email"
        value=""
        name=""
        placeholder="Your email address"
        aria-label="Email Address"
      />
      <br />
      <textarea name="name" rows="8" cols="0" />
      <br />
      <button class="buttons">Send</button>
    </div>
  );
};

export default Ending;
