import { useCallback, useState } from "react";
import { RoutesPath } from "./../types/paths";
import Api from "services";

interface Models {
  model: string;
  options?: {};
  pathOptions?: string;
  headerOptions?: {};
  immediatlyLoadData?: boolean;
}

interface DynamicIntegrations {
    refetchOptions?: null | any;
    refetchPathOptions?: string;
    generateLoading?: boolean;
    displayToast?: boolean;
    header?: {}
}

const useCRUD = ({
  model,
  options,
  pathOptions,
  headerOptions,
  immediatlyLoadData,
}: Models) => {
  const [loading, setLoading] = useState(immediatlyLoadData);

  const handleGet = useCallback(
    ({
      refetchOptions = null,
      refetchPathOptions = "",
      generateLoading = true,
      displayToast = true,
      header = {},
    }: DynamicIntegrations) => {
      return Api.get(`/${model}`)
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [model, pathOptions]
  );

  const handleCreate = useCallback(({ values = {}, refetchOptions = null, refetchPathOptions = '', generateLoading = true, displayToast = true, header = {} } = {}) => {
    return Api.post(`/${model}`, values)
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
  }, [model, pathOptions])

  return {
    loading,
    handleGet,
    handleCreate
  }
};

export default useCRUD;
