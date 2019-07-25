import Header from '../Header/Header';

const layoutStyle = {
  margin: '80px 0',
  padding: 0,
};

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  )
}
