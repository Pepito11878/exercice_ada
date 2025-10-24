import { FaYoutube, FaGithub } from 'react-icons/fa'

export const SocialLinks = () => {
  return (
    <section className="mt-5">
      <h3  className="text-2xl font-extrabold">Mes reseau sociaux</h3>
      <ul className="mt-5">
        <li className='flex items-center'>
          <FaYoutube className='mr-3'/>
          <a className="hover:text-[#33E7F2]" href="https://www.youtube.com/@pepito4653" target="blank_">Youtube</a>
        </li>
        <li className='flex items-center'>
          <FaGithub className='mr-3'/>
          <a className="hover:text-[#33E7F2]" href="https://github.com/Pepito11878" target="blank_">Github</a>
        </li>
      </ul>
    </section>
  );
};
