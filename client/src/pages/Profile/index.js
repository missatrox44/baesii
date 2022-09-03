// import React from 'react';
// // import { Link } from "react-router-dom";
// import './Profile.css';

// export default function Profile(){
//     <div className='container'>
//         <p>Username's Profile</p>
//     </div>
// }

// import { Navigate, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';


// import { QUERY_SINGLE_USER, QUERY_ME } from '../../utils/queries';

// import Auth from '../utils/auth';

// const Profile = () => {
//   const { userId } = useParams();

//   // If there is no `userId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
//   const { loading, data } = useQuery(
//     userId ? QUERY_SINGLE_USER : QUERY_ME,
//     {
//       variables: { userId: userId },
//     }
//   );

//   // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
//   const user = data?.me || data?.user || {};

//   // Use React Router's `<Navigate />` component to redirect to personal profile page if username is yours
//   if (Auth.loggedIn() && Auth.getUser().data._id === userId) {
//     return <Navigate to="/me" />;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user?.username) {
//     return (
//       <h4>
//         You need to be logged in to see your profile page. Use the navigation
//         links above to sign up or log in!
//       </h4>
//     );
//   }

//   return (
//     <div>

//       <h4>
//         {userId ? user.username : 'You'} 
//       </h4>

//     </div>
//   );
// };

// // export default Profile;
