import { getAuth } from 'firebase/auth';
import { auth } from '@/firebase/client'; // Firebase instance import

export async function withAuth(context) {
  const user = getAuth(auth).currentUser;

  if (!user) {
    return {
      redirect: {
        destination: '/sign-in', // redirect to sign-in page if not logged in
        permanent: false,
      },
    };
  }

  return {
    props: {}, // pass other props if needed
  };
}