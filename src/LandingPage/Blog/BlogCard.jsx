import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const BlogCard = ({ article }) => {
  return (
    <Card className="mt-6 w-full  hover:shadow-xl bg-[#f6f9fc] text-[#61677A]">
      <CardBody className="p-0">
        <img className="pb-6 rounded-md" src={article.imageURL} alt="" />
        <div className="p-4">
          <Typography variant="h5" className="mb-2 text-[#61677A]">
            {article.articleName}
          </Typography>
          <Typography>
            <span>Read time : {article.readTime}</span>
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Link
          to={`/blog-details/${article._id}`}
          className="inline-block rounded-md bg-[#5EBEC4]">
          <Button
            size="md"
            variant="text"
            className="flex items-center text-white gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
