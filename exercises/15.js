export default function Button({mode="filled", children, Icon, ...props}) {
    // Todo: Build this component!
    
    // !!! Important: 
    // Wrap the icon with a <span className="button-icon"> to achieve the target look
    // Also wrap the children prop with a <span>
    // Determine the className based on the mode prop
     const modeClass = `button ${mode === 'outline' ? 'outline-button' : mode === 'text' ? 'text-button' : 'filled-button'}`;
   
     return (
       <button className={Icon ? "icon-button" : modeClass} {...props}>
         {Icon && <span className="icon-button"><Icon /></span>}
         <span>{children}</span>
       </button>
     );
   }
   