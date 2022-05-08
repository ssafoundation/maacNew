import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, withRouter } from 'react-router-dom';
import Loader from '../../../components/Atoms/Loader';
import { verifyEmail } from '../../../store/auth/verifyEmail/actions';
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const VerifyEmail = ({ history }) => {
  let query = useQuery();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.verifyEmail);

  // const handleSubmit = (event, errors, values) => {
  //   if (errors.length === 0)
  //     // console.log(
  //     //   `file: ForgotPassword.js ~ line 7 ~ handleSubmit ~ values`,
  //     //   values
  //     // );
  //     dispatch(verifyEmail({ ...values, email: query.get('email') }, history));
  // };

  useEffect(() => {
    // if (!query.get('email')) {
    //   toaster('warning', 'Email missing in query!!');
    // }
    if (query.get('email') && query.get('token')) {
      const values = {
        accountActivateToken: query.get('token'),
      };
      dispatch(verifyEmail({ ...values, email: query.get('email') }, history));
    } else {
      history.push('/signup');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      <div className="student-login-main-wrap pass-reset">
        <div
          className="student-account-form-wrap reset-password-student"
          style={{ marginTop: '30px' }}
        >
          <div
            className="d-flex justify-content-center align-items-center h-full"
            style={{ height: '100%' }}
          >
            {loading ? (
              <div style={{ height: '100%' }}>
                <Loader className={'h-full '} text="Activating account..." />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(VerifyEmail);
