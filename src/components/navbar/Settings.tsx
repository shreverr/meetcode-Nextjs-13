import { FC } from 'react' 
import { Button } from '../ui/Button' 
import Icons from '../ui/Icons' 

interface SettingsProps {

}

const Settings: FC<SettingsProps> = ({ }) => {
  return (
    <Button variant='ghost' size='sm'>
      <Icons.Settings />
    </Button>
  ) 
}

export default Settings 