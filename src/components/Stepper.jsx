import { useEffect, useState, useRef } from 'react';

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);

  const stepRef = useRef();

  const updateState = (stepNumber, steps) => {
    const newSteps = [...steps];

    let count = 0;

    while (count < newSteps.length) {
      // Current steps
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }
      // Step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      // Step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }

    return newSteps;
  };

  useEffect(() => {
    // Create array of objects
    // {description: 'Account information', completed: false, highlighted: true, selected: true}
    // {description: 'Personal Details', completed: false, highlighted: false, selected: false}
    // {description: 'Complete', completed: false, highlighted: false, selected: false}
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0,
          selected: index === 0,
        }
      )
    );

    stepRef.current = stepsState;

    // curerntStep - 1, puesto debe iniciar en 0 y no en 1
    const current = updateState(currentStep - 1, stepRef.current);

    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <>
        <div
          key={index}
          className={
            index !== newStep.length - 1
              ? 'w-full flex items-center'
              : 'flex items-center'
          }
        >
          <div className="relative flex flex-col items-center text-teal-600">
            <div
              className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3 ${
                step.selected ? 'bg-green-600' : ''
              }`}
            >
              {/* Display number */}
              {step.completed ? (
                <span className="text-white font-bold text-xl">&#10003;</span>
              ) : (
                index + 1
              )}
            </div>
            <div
              className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ${
                step.highlighted ? 'text-gray-900' : 'text-gray-400'
              }`}
            >
              {step.description}
              {/* Display description */}
            </div>
          </div>

          {/* Flex-auto toma el espacio que hay disponible */}
          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
              step.completed ? 'border-green-600' : 'border-gray-300'
            }`}
          >
            {/* Display line */}
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="mx-4 p-4 flex justify-between items-center">
        {displaySteps}
      </div>
    </>
  );
};

export default Stepper;
