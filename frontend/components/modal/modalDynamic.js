//type: default, image, card
function ModalDynamic({ type = "default" }) {
  // return type === "default" ? (
  //   <div class="modal">
  //     <div class="modal-background"></div>
  //     <div class="modal-content"></div>
  //     <button class="modal-close is-large" aria-label="close"></button>
  //   </div>
  // ) : type === "image" ? (
  //   <div class="modal" id="modal-image">
  //     <div class="modal-background"></div>
  //     <div class="modal-content">
  //       <p class="image is-4by3">
  //         <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
  //       </p>
  //     </div>
  //     <button class="modal-close is-large" aria-label="close"></button>
  //   </div>
  // ) : (
  //   <div class="modal">
  //     <div class="modal-background"></div>
  //     <div class="modal-card">
  //       <header class="modal-card-head">
  //         <p class="modal-card-title">Modal title</p>
  //         <button class="delete" aria-label="close"></button>
  //       </header>
  //       <section class="modal-card-body"></section>
  //       <footer class="modal-card-foot">
  //         <button class="button is-success">Save changes</button>
  //         <button class="button">Cancel</button>
  //       </footer>
  //     </div>
  //   </div>
  // );

  return (
    <div id="modal-js-example" class="modal">
      <div class="modal-background"></div>

      <div class="modal-content">
        <div class="box">
          <p>Modal JS example</p>
        </div>
      </div>

      <button class="modal-close is-large" aria-label="close"></button>
    </div>
  );
}

export default ModalDynamic;
