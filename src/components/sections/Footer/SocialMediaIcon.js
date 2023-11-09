const SocialMediaIcon = ({ icon, link }) => {
  return (
    <div>
      <a href={link} target="_blank">
        {icon}
      </a>
    </div>
  );
};

export default SocialMediaIcon;
