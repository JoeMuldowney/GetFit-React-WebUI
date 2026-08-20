import { useContext } from "react";
import type { SyntheticEvent, ChangeEvent} from "react";
import { useUser, UserContext } from "@/context/usercontext";
import {Button} from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {useNutritionRows} from "@/hooks/nutritionhook";
import {BuildPayload} from "@/utils/nutritionpayload";
import { createDrink } from "@/services/drinkservice";

function AddDrink() {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const {
    items: drink,
    addRow,
    removeRow,
    updateItem,
  } = useNutritionRows("drinkname", "drinkamount");

const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const payload = {
      drink_items: BuildPayload(
        drink,
        "drinkname",
        "drinkamount"
      ),
    };

      try {
        await createDrink(payload);
        navigate("/home");
      } catch (err) {
        alert(err.message || "Failed to save meal");
      }
    };


    return (
    <div>
        <form onSubmit={handleSubmit}>
      <table>
        <thead>
          <tr>
            <th>Drink Name</th>
            <th>Amount (oz)</th>
            <th>Actions</th>
          </tr>
        </thead>- JavaScript (ES6+)

        <tbody>
        
          {drink.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  value={item.drinkname}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updateItem(
                      item.id,
                      "drinkname",
                      e.target.value
                    )
                  }
                />
              </td>

              <td>
                <input
                  type="number"
                  value={item.drinkamount}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updateItem(
                      item.id,
                      "drinkamount",
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
        + Add Drink
      </button>

                    
       <Button>Save</Button>             
        </form>
    </div>
    );
}

export default AddDrink;