export default {
  data: () => ({
    isMobile: null,
  }),
  methods: {
    handleResizeEvent: function() {
      this.isMobile = window.innerWidth <= 800 && window.innerHeight <= 600;
    },
  },
  created() {
    this.handleResizeEvent();
    window.addEventListener("resize", this.handleResizeEvent);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResizeEvent);
  },
};
