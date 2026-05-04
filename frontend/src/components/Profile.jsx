export default function Profile({ profile }) {
    console.log(profile)
    return (
        <>
            <div className="border">

                <div >
                    <img src={profile.photo} alt="" />
                    <h3>{profile.name}</h3>
                </div>

            </div>
        </>
    )
}