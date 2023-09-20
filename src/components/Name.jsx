import Card from './card';

const Name = () => {
  const arr = [
    {
      id: 1,
      phone: '012-345-6780',
      position: 'Marketing Specialist',
      company: 'Marketing Pro',
      disable: true,
      age: 35,
      name: 'Bob Smith',
      address: '322 Blackwell Street',
      text: 'Creative Director',
      image:
        'https://res.cloudinary.com/dutvrzezk/image/upload/v1694620846/cld-sample-3.jpg',
    },

    {
      id: 2,
      phone: '012-345-6780',
      disable: true,
      age: 35,
      position: 'Project Manager',
      company: 'Project Solutions Inc.',
      address: '322 Blackwell Street',
      text: 'Creative Director',
      name: 'Carol Davis',
      image:
        'https://res.cloudinary.com/dutvrzezk/image/upload/v1694620845/cld-sample.jpg',
    },

    {
      id: 3,
      phone: '012-345-6780',
      position: 'Graphic Designer',
      company: 'DesignMasters',
      disable: true,
      age: 35,
      text: 'Creative Director',
      name: 'David Brown',
      address: '322 Blackwell Street',
      image:
        'https://res.cloudinary.com/dutvrzezk/image/upload/v1694620847/cld-sample-5.jpg',
    },
    {
      phone: '012-345-6780',
      position: 'Marketing Specialist',
      company: 'Marketing Pro',
      name: 'Bob Smith',
      address: '322 Blackwell Street',
      text: 'Creative Director',
      image:
        'https://res.cloudinary.com/dutvrzezk/image/upload/v1694620846/cld-sample-3.jpg',
    },

    {
      phone: '012-345-6780',
      position: 'Project Manager',
      company: 'Project Solutions Inc.',
      address: '322 Blackwell Street',
      text: 'Creative Director',
      name: 'Carol Davis',
      image:
        'https://res.cloudinary.com/dutvrzezk/image/upload/v1694620845/cld-sample.jpg',
    },

    {
      phone: '012-345-6780',
      position: 'Graphic Designer',
      company: 'DesignMasters',
      text: 'Creative Director',
      name: 'David Brown',
      address: '322 Blackwell Street',
      image:
        'https://res.cloudinary.com/dutvrzezk/image/upload/v1694620847/cld-sample-5.jpg',
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 mt-9">
        {arr.map((item, index) => (
          <Card
            key={index}
            description={item.description}
            position={item.position}
            name={item.name}
            image={item.image}
            address={item.address}
            phone={item.phone}
            text={item.text}
            age={item.age}
            disable={item.disable}
          />
        ))}
      </div>
    </>
  );
};
export default Name;
