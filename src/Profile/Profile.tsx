const Profile = () => {
    return ( 

        <div className="flex h-[27vh]">
            <div className="flex flex-col">
            <div className="flex text-5xl font-bold h-[7vh] my-7 w-[25vw] p-2 ">
                Yash Raj Dargan
            </div>
            <div className="flex font-thin text-[#71717a] w-[25vw] p-2">
                Software and Front-App Developer.  
            </div>
            </div>
            <img className="flex h-[20vh] mx-[3.5rem] my-[3rem]" src="assets/profile.png" alt="profile-photo" />
           
        </div>
     );
}
 
export default Profile;