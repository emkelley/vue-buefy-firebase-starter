<script>
import { logout } from "@/firebase";

export default {
  name: "Logout",
  created() {
    logout();
  },
};
</script>
