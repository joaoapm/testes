import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit
} from "@angular/core";
import tingle from "./tingle"; 

@Component({
  selector: "ays",
  template: `
    <button (click)="handleClick()">{{ label }}</button>
  `,
  styles: [
    `
      button {
        font-size: 0.9rem;
        height: 2rem;
        padding: 0.35rem 0.6rem;
        background: #5755d9;
        border-color: #4b48d6;
        color: #fff;
        border-radius: 2px;
      }
      .modal-text {
        font-size: 1.5rem;
        font-weight: 600;
      }
      .tingle-modal * {
        box-sizing: border-box;
      }
      .tingle-modal {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1000;
        display: -ms-flexbox;
        display: flex;
        visibility: hidden;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-align: center;
        align-items: center;
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
        background: rgba(0, 0, 0, 0.8);
        opacity: 0;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        transition: transform 0.2s ease;
      }
      .tingle-modal--noClose .tingle-modal__close,
      .tingle-modal__closeLabel {
        display: none;
      }
      .tingle-modal--confirm .tingle-modal-box {
        text-align: center;
      }
      .tingle-modal--noOverlayClose {
        cursor: default;
      }
      .tingle-modal__close {
        position: fixed;
        top: 10px;
        right: 28px;
        z-index: 1000;
        padding: 0;
        width: 5rem;
        height: 5rem;
        border: none;
        background-color: transparent;
        color: #f0f0f0;
        font-size: 6rem;
        font-family: monospace;
        line-height: 1;
        cursor: pointer;
        transition: color 0.3s ease;
      }
      .tingle-modal__close:hover {
        color: #fff;
      }
      .tingle-modal-box {
        position: relative;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        margin-top: auto;
        margin-bottom: auto;
        width: 30%;
        border-radius: 4px;
        background: #fff;
        opacity: 1;
        cursor: auto;
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        -ms-transform: scale(0.8);
        transform: scale(0.8);
      }
      .tingle-modal-box__content {
        padding: 1rem;
      }
      .tingle-modal-box__footer {
        padding: 1rem 1rem;
        width: auto;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
        background-color: #fff;
        cursor: auto;
      }
      .tingle-modal-box__footer::after {
        display: table;
        clear: both;
        content: "";
      }
      .tingle-modal-box__footer--sticky {
        position: fixed;
        bottom: -200px;
        z-index: 10001;
        opacity: 1;
        transition: bottom 0.3s ease-in-out 0.3s;
      }
      .tingle-enabled {
        position: fixed;
        right: 0;
        left: 0;
        overflow: hidden;
      }
      .tingle-modal--visible .tingle-modal-box__footer {
        bottom: 0;
      }
      .tingle-enabled .tingle-content-wrapper {
        filter: blur(8px);
      }
      .tingle-modal--visible {
        visibility: visible;
        opacity: 1;
      }
      .tingle-modal--visible .tingle-modal-box {
        -ms-transform: scale(1);
        transform: scale(1);
      }
      .tingle-modal--overflow {
        overflow-y: scroll;
        padding-top: 8vh;
      }
      .tingle-btn {
        display: inline-block;
        margin: 0 0.5rem;
        padding: 0.5rem 1rem;
        border: none;
        background-color: grey;
        box-shadow: none;
        color: #fff;
        vertical-align: middle;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        line-height: normal;
        cursor: pointer;
        transition: background-color 0.4s ease;
      }
      .tingle-btn--primary {
        background: #5755d9;
        color: #fff;
      }
      .tingle-btn--danger {
        background-color: #fff;
        color: #5755d9;
      }
      .tingle-btn--default {
        background-color: #fff;
        color: #5755d9;
      }
      .tingle-btn--pull-left {
        float: left;
      }
      .tingle-btn--pull-right {
        float: right;
      }
      @media (max-width: 540px) {
        .tingle-modal {
          top: 0;
          display: block;
          padding-top: 60px;
          width: 100%;
        }
        .tingle-modal-box {
          width: auto;
          border-radius: 0;
        }
        .tingle-modal-box__content {
          overflow-y: scroll;
        }
        .tingle-modal--noClose {
          top: 0;
        }
        .tingle-modal--noOverlayClose {
          padding-top: 0;
        }
        .tingle-modal-box__footer .tingle-btn {
          display: block;
          float: none;
          margin-bottom: 1rem;
          width: 100%;
        }
        .tingle-modal__close {
          top: 0;
          right: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 60px;
          border: none;
          background-color: #2c3e50;
          box-shadow: none;
          color: #fff;
          line-height: 55px;
        }
        .tingle-modal__closeLabel {
          display: inline-block;
          vertical-align: middle;
          font-size: 1.5rem;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        }
        .tingle-modal__closeIcon {
          display: inline-block;
          margin-right: 0.5rem;
          vertical-align: middle;
          font-size: 4rem;
        }
      }
      @supports (
        (-webkit-backdrop-filter: blur(12px)) or (backdrop-filter: blur(12px))
      ) {
        .tingle-modal {
          -webkit-backdrop-filter: blur(20px);
          backdrop-filter: blur(20px);
        }
        @media (max-width: 540px) {
          .tingle-modal {
            -webkit-backdrop-filter: blur(8px);
            backdrop-filter: blur(8px);
          }
        }
        .tingle-enabled .tingle-content-wrapper {
          filter: none;
        }
      }
    `
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AysComponent implements OnInit {
  @Input() label = "Submit";
  @Input() confirmationtext = "Are you sure?";
  @Input() modalclass = "";
  @Input() textclass = "modal-text";
  @Input() yeslabel = "Yes";
  @Input() nolabel = "No";
  @Input() closelabel = "Close";
  @Input() stickyfooter = false;
  @Output() select = new EventEmitter<Boolean>();
  @Output() onOpen = new EventEmitter<Boolean>();
  @Output() onClose = new EventEmitter<Boolean>();
  @Output() beforeClose = new EventEmitter<Boolean>();

  modal;

  handleClick() {
    this.modal.open();
  }
  constructor() {}

  ngOnInit() {
    let self = this;
    this.modal = new tingle.modal({
      footer: true,
      stickyFooter: this.stickyfooter,
      closeMethods: ["overlay", "button", "escape"],
      closeLabel: this.closelabel,
      cssClass: this.modalclass ? [this.modalclass] : [],
      onOpen: function() {
        self.onOpen.emit(true);
      },
      onClose: function() {
        self.onClose.emit(true);
      },
      beforeClose: function() {
        self.beforeClose.emit(true);
        return true;
      }
    });
    // set content
    this.modal.setContent(
      `<p class='${this.textclass}'>${this.confirmationtext}</p>`
    );

    // add yes button
    this.modal.addFooterBtn(
      this.yeslabel,
      "tingle-btn tingle-btn--primary",
      () => {
        //emit select event => true and close the modal
        this.select.emit(true);
        this.modal.close();
      }
    );

    // add no button
    this.modal.addFooterBtn(
      this.nolabel,
      "tingle-btn tingle-btn--default",
      () => {
        //emit select event => false and close the modal
        this.select.emit(false);
        this.modal.close();
      }
    );
  }
}