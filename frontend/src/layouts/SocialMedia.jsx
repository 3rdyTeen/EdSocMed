import { SocialMediaSidebar, Newsfeed, RightSoc } from "../components"

const SocialMedia = () => {
  return (
    <div className='flex h-full justify-between'>
        <SocialMediaSidebar />
        <div className="flex h-full w-full">
            <Newsfeed />
            <RightSoc />
        </div>
        
    </div>
  )
}

export default SocialMedia