import BackConfirm from "../components/backconfirm.jsx";
export default function ViewBlog({ handleClickBack }) {
  return (
    <>
      <BackConfirm handleClickBack={handleClickBack} />
      <div className="bg-[#B4B4B4] flex mx-auto max-w-xl h-64 mt-9">
        <img
          src="https://pbs.twimg.com/media/F7FnW9daQAASQ7Y?format=jpg&name=medium"
          alt="windah"
          className="mx-auto object-cover"
        />
      </div>
      <div className="grid grid-cols-6 gap-4 mt-4 min-w-min">
        <h1 className="col-start-3 row-start-1 ml-8 text-xl font-bold">
          Judul Blog
        </h1>
        <p className="col-start-3 row-start-2 ml-8">2 Aug 2023</p>
        {/* <div className="col-start-4 row-start-2 flex justify-end space-x-2 mr-8">
          <a href="" className="underline">
            Edit
          </a>
          <span>|</span>
          <a href="" className="underline">
            Hapus
          </a>
        </div> */}
        <p className="col-start-3 col-span-2 self-center ml-8 mr-8 overflow-hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          inventore dolore odit impedit ipsam consequuntur quas, id, veniam
          accusantium qui eos illum vero soluta quasi totam natus placeat quae
          rem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
          non neque provident nulla odit omnis minima iste, ipsum necessitatibus
          eveniet molestiae tenetur minus obcaecati. Enim cupiditate ipsa sint
          debitis voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Rerum earum dolores quae voluptates impedit praesentium
          voluptatem eaque hic? Natus iure laborum blanditiis! Nihil dolor quis
          totam molestias provident quasi a. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Quas amet, officia totam labore ut
          pariatur perspiciatis vero nemo delectus aperiam sunt ipsa eos fuga
          assumenda quod eius, velit dolorum neque. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Fugiat recusandae suscipit distinctio
          quis? Asperiores, delectus? Quo maxime quae a, excepturi consectetur
          error explicabo officiis praesentium? Sed qui dolorum magnam saepe.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          inventore dolore odit impedit ipsam consequuntur quas, id, veniam
          accusantium qui eos illum vero soluta quasi totam natus placeat quae
          rem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
          non neque provident nulla odit omnis minima iste, ipsum necessitatibus
          eveniet molestiae tenetur minus obcaecati. Enim cupiditate ipsa sint
          debitis voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Rerum earum dolores quae voluptates impedit praesentium
          voluptatem eaque hic? Natus iure laborum blanditiis! Nihil dolor quis
          totam molestias provident quasi a. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Quas amet, officia totam labore ut
          pariatur perspiciatis vero nemo delectus aperiam sunt ipsa eos fuga
          assumenda quod eius, velit dolorum neque. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Fugiat recusandae suscipit distinctio
          quis? Asperiores, delectus? Quo maxime quae a, excepturi consectetur
          error explicabo officiis praesentium? Sed qui dolorum magnam saepe.
        </p>
      </div>
    </>
  );
}
