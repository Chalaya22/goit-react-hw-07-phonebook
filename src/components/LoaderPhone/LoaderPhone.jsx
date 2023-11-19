import { RotatingTriangles } from 'react-loader-spinner';
import css from './LoaderPhone.module.css';
const Loader = () => {
  return (
    <div className={css.styleLoader}>
      <RotatingTriangles
        visible={true}
        height="80"
        width="80"
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
      />
    </div>
  );
};

export default Loader;
