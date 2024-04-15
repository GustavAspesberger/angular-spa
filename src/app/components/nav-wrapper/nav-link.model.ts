interface NavLink {
  link: string;
  label: string;
  disabled: boolean;
}

const createNavLink = (link: string, label: string, disabled: boolean = false): NavLink => {
  return { link, label, disabled };
};

export { NavLink, createNavLink };
