import FacebookLogin from '@greatsumini/react-facebook-login';

type Props = {};

const Login = (props: Props) => {
  return (
    <FacebookLogin
      appId="1467702463678075"
      onSuccess={(response) => {
        console.log('Login Success!', response);
      }}
      onFail={(error) => {
        console.log('Login Failed!', error);
      }}
      onProfileSuccess={(response) => {
        console.log('Get Profile Success!', response);
      }}
    />
  );
};

export default Login;
