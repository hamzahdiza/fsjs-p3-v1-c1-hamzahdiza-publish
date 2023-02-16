function ImagePopup() {
  return (
    <div className="ImagePopup content-center w-[1500px] h-full mt-[50px]">
      <div class="mx-auto rounded-xl w-[350px] h-[655px] border border-gray-700 bg-gray-800 p-4">
        <div class="ml-4 mt-4 grid grid-cols-1 gap-8 md:grid-cols-2  w-[600px]">
          <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
            <img alt="Les Paul" class="object-cover w-full aspect-square rounded-xl" src="https://i.pinimg.com/564x/2c/85/45/2c85455c2662d5d5dd9cf5c2ccd43a28.jpg" />

            <div class="grid grid-cols-2 gap-4 ">
              <img alt="Les Paul" src="https://i.pinimg.com/564x/2c/85/45/2c85455c2662d5d5dd9cf5c2ccd43a28.jpg" class="object-cover w-full aspect-square rounded-xl" />

              <img alt="Les Paul" src="https://i.pinimg.com/564x/2c/85/45/2c85455c2662d5d5dd9cf5c2ccd43a28.jpg" class="object-cover w-full aspect-square rounded-xl" />

              <img alt="Les Paul" src="https://i.pinimg.com/564x/2c/85/45/2c85455c2662d5d5dd9cf5c2ccd43a28.jpg" class="object-cover w-full aspect-square rounded-xl" />

              <img alt="Les Paul" src="https://i.pinimg.com/564x/2c/85/45/2c85455c2662d5d5dd9cf5c2ccd43a28.jpg" class="object-cover w-full aspect-square rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ImagePopup;
