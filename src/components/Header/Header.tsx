import './index.scss';

export default function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <h3>Тестовое Задание</h3>
        <div className='header__link__container'>
          <a className='header__link' target='_blank' href="https://github.com/Jokernics/currency-converter" rel="noreferrer">Source Code</a>
          <a className='header__link' target='_blank' href="https://jokernix-portfolio.netlify.app/#/works" rel="noreferrer">Другие проекты</a>
        </div>
      </div>
    </div>
  );
}