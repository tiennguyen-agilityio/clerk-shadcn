import { SignUp } from "@clerk/nextjs";

import Loading from "@/components/Loading";

const SignUpPage = () => {
  return <SignUp fallback={<Loading />} />;
};

export default SignUpPage;
