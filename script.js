const PI = 3.1415;
const radius = 5;
const minAreaPerPlant = 0.8;
const area = PI * radius * radius;
const numInitialPlants = 20;

let maxNumPlants = area / minAreaPerPlant;

function predictPlantGrowth(numWeek) {
  let plantCount = numInitialPlants;
  for (let i = 0; i < numWeek; i++) {
    plantCount *= 2;
  }

  if (plantCount > 0.8 * maxNumPlants) {
    console.log("Needs to be pruned");
  } else if (
    plantCount >= 0.5 * maxNumPlants &&
    plantCount <= 0.8 * maxNumPlants
  ) {
    console.log("Needs to be monitored");
  } else {
    console.log("More could be planted");
  }
}

predictPlantGrowth(1);
predictPlantGrowth(2);
predictPlantGrowth(3);

function calculateAdditionalSpace(paramPlantCount, paramNumWeeks) {
  for (let i = 0; i < paramNumWeeks; i++) {
    paramPlantCount *= 2;
  }

  const totalArea = paramPlantCount * minAreaPerPlant;
  const additionalSpace = totalArea - area;
  const radiusOfExpandedGarden = Math.sqrt(totalArea / PI);

  console.log(`Additional space required: ${additionalSpace}`);
  console.log(`Radius of the expanded garden: ${radiusOfExpandedGarden}`);
}

calculateAdditionalSpace(100, 10);
