export const generateDishImagePath = ({
  userId,
  dishId,
}: {
  userId: string;
  dishId: string;
}) => `${userId}/dish/${dishId}`;

export const generateMenuImagePath = ({
  userId,
  menuId,
}: {
  userId: string;
  menuId: string;
}) => `${userId}/menu/${menuId}.png`;

export const generateBackgroundImagePath = ({
  userId,
  menuId,
}: {
  userId: string;
  menuId: string;
}) => `${userId}/menu/${menuId}/bg.png`;
