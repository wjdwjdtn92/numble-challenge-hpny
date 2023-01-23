import style from './PostItem.module.css';

export default function PostItem({ $target, props }) {
  this.props = props;
  this.$element = document.createElement('li');
  this.$element.className = style['post-list__item'];
  $target.appendChild(this.$element);

  this.render = async () => {
    if (!this.props) {
      return;
    }

    const { postId, title, createdAt, content, image } = this.props;
    const date = new Date(createdAt).toLocaleDateString();
    this.$element.dataset.postId = postId;

    this.$element.insertAdjacentHTML(
      'beforeend',
      `
      <div 
        class="placeholder image-size-110"
        data-src=${image}
        data-alt=${title}      
      ></div>
      <div class="${style['post-list__item-container']}"> 
        <h3 class=${style['post-list__item-title']}>${title}</h3>
        <p class = ${style['post-list__item-content']}>${content}</p>
      </div>
      <div class=${style['post-list__item-date']}>${date}</div>
    `,
    );
  };
  this.render();
}
