import React from "react";
import "./Profile.css";
import BottomSidebar from "../../components/BottomSidebar/BottomSidebar";
import FriendSuggestions from "../../components/Widgets/FriendSuggestions/FriendSuggestions";
import Topics from "../../components/Widgets/Topics/Topics";
import SearchInput from "../../components/Widgets/SearchInput/SearchInput";
import Post from "../../components/Feed/Post/Post";

import BackIcon from "@material-ui/icons/KeyboardBackspace";
import ScheduleIcon from "@material-ui/icons/CalendarToday";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Links from "../../components/Widgets/Links/Links";
import HomeBox from "../../components/HomeBox/HomeBox";
import Loading from "../../components/Loading/Loading";

const Profile = () => {
  const [category, setCategory] = React.useState(1);
  const { posts } = useSelector((state) => state.posts);
  let history = useHistory();
  document.title = "Aditya (@adityaa.aks) / Twitter";
  const [loading, setLoading] = React.useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <HomeBox>
      <section className="feed">
        <div className="profileHeader">
          <div onClick={() => history.goBack()}>
            <BackIcon />
          </div>
          <div>
            <span>Aditya</span>
            <span>1.2K Tweets</span>
          </div>
        </div>
        <div className="profile">
          <div className="backgroundImage">
            <img className="headerImg" src="https://images4.alphacoders.com/125/thumb-1920-1253482.jpg" alt = ""/>
          </div>
          <div className="profileTitle">
            <div className="profileImage">
              <Avatar src="https://www.fcbarcelonanoticias.com/uploads/s1/12/83/61/2/fc-barcelona-v-levante-ud-laliga-santander-3-1.jpeg" />
            </div>
            <div className="editProfile">
              <span>Edit Profile</span>
            </div>
          </div>
          <div className="profileBiography">
            <span>Aditya</span>
            <span>@adityaa.aks</span>
            <span>Software Developer</span>
            <span>
              <ScheduleIcon />
              Joined December 2011
            </span>
          </div>
          <div>
            <span>
              <span>167</span>
              <span>Following</span>
            </span>
            <span>
              <span>167</span>
              <span>Followers</span>
            </span>
          </div>
          <div className="profileCategory">
            <div
              className={category === 1 && "profileCategoryActive"}
              onClick={() => setCategory(1)}
            >
              <span>Tweets</span>
            </div>
            <div
              className={category === 2 && "profileCategoryActive"}
              onClick={() => setCategory(2)}
            >
              <span>Tweets & replies</span>
            </div>
            <div
              className={category === 3 && "profileCategoryActive"}
              onClick={() => setCategory(3)}
            >
              <span>Media</span>
            </div>
            <div
              className={category === 4 && "profileCategoryActive"}
              onClick={() => setCategory(4)}
            >
              <span>Likes</span>
            </div>
          </div>
        </div>
        <article className="profilePosts">
          {!loading ? (
            posts.map((post) => (
              <Post
                key={post.id}
                username={post.username}
                userimage={post.userimage}
                date={post.date}
                displayName={post.displayName}
                text={post.text}
                shareImage={post.shareImage}
              />
            ))
          ) : (
            <Loading />
          )}
        </article>
        <BottomSidebar />
      </section>
      <div className="widgets">
        <SearchInput placeholder="Search Twitter" />
        <FriendSuggestions />
        <Topics />
        <Links />
      </div>
    </HomeBox>
  );
};

export default Profile;
