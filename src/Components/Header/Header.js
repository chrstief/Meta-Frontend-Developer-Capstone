import logo from '../../Assets/Logo.svg';

export default function Header() {
  return (
    <header>
        <img style={{ width: 'auto', height: '90px',padding: '11px 0 16px 0', marginRight:'64px'}} src={logo} alt='Logo'/>
    </header>
  )
}
