// // src/security/ProtectedRoute.tsx
// "use client"; // Ensures client-side execution

// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import { useSelector } from "react-redux";
// import { IRootState } from "@/store/store";

// const withAuth = (WrappedComponent: React.FC) => {
//   return (props: any) => {
//     const router = useRouter();
//     const isLoggedIn = useSelector(
//       (state: IRootState) => state.userAccountSlice.userLoggedIn
//     );

//     useEffect(() => {
//       if (!isLoggedIn) {
//         router.push("/home"); // Redirect to home if not logged in
//       }
//     }, [isLoggedIn]);

//     if (!isLoggedIn) {
//       return <div>Loading...</div>;
//     }

//     return <WrappedComponent {...props} />;
//   };
// };

// export default withAuth;
