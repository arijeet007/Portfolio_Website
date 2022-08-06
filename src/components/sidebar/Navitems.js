import Home from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DescriptionIcon from '@mui/icons-material/Description';
import RssFeedIcon from '@mui/icons-material/RssFeed'

let  arr=[{

    title: "Home",
    icon: <Home />,
    link: "/"

},
{
    title:"MyInfo",
    icon:<ContactMailIcon/>,
    link: "/myinfo"
},
{
    title:"Services",
    icon:<SupportAgentIcon/>,
    link: "/services"
},
{
    title:"CV",
    icon:<DescriptionIcon/>,
    link: "/cv"
},
{
    title:"Blog",
    icon:<RssFeedIcon/>,
    link: "/blog"
}
]

export default arr;