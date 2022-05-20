

type Props ={
  children?: React.ReactNode
}

export const DarkLayout: React.FC<Props> = ({children}) => {
  return (
    <div
    style={{backgroundColor: 'rgba(0,0,0,0.3)', 
    padding:'10px', 
    borderRadius:'5px'}}
    >
        <h3>Dark layout</h3>
   {children}
    </div>
  )
}
