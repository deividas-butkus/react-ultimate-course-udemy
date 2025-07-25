import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (data) => {
      toast.success("User account successfully updated");
      queryClient.setQueryData(["user"], data?.user);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
