import css from './Loader.module.css';
import { Box } from '@mui/material';
import { ThreeDots } from 'react-loader-spinner';

function Loader() {
  return (
    <>
      <Box
        className={css.loader}
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#007bff"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </Box>
    </>
  );
}

export default Loader;
