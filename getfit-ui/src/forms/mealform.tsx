//import { useContext } from "react";
import type { SyntheticEvent, ChangeEvent} from "react";
//import { useUser, UserContext } from "@/context/usercontext";
import {Button} from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {useNutritionRows} from "@/hooks/nutritionhook";
import {BuildPayload} from "@/utils/nutritionpayload";
import { createMeal } from "@/services/mealservice";

function AddMeal() {

  const navigate = useNavigate();

  //const { user } = useContext(UserContext);

  const {
    items: food,
    addRow,
    removeRow,
    updateItem,
  } = useNutritionRows("foodname", "foodamount");

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const payload = {
      meal_items: BuildPayload(
        food,
        "foodname",
        "foodamount"
      ),
    };

    try {
      await createMeal(payload);
      navigate("/home");
    } catch (err) {
        if (err instanceof Error) {
          alert(err.message);
        } else {
          alert("Failed to save food");
        }
      }
  };



    return (
    <div>
         
        <form onSubmit={handleSubmit}>
      <table>
        <thead>
          <tr>
            <th>Food Name</th>
            <th>Amount (g)</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
        
          {food.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  value={item.foodname}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updateItem(
                      item.id,
                      "foodname",
                      e.target.value
                    )
                  }
                />
              </td>

              <td>
                <input
                  type="number"
                  value={item.foodamount}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updateItem(
                      item.id,
                      "foodamount",
                      e.target.value
                    )
                  }
                />
              </td>
                    
              <td>
                <button type="button" onClick={() => removeRow(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>

      <button type="button" onClick={addRow}>
        + Add Food
      </button>

                    
       <Button>Save</Button>             
        </form>
    </div>
    );
}

export default AddMeal;